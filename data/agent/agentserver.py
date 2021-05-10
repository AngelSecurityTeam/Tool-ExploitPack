import sys
import subprocess
import os
import os
import sys
import time
import errno
import shlex
import socket
import struct
import random
from datetime import date
target = sys.argv[0]
port = sys.argv[1]
platform = sys.platform

def main():
    # Parameters
    port = 5678 #default
    interface = ""
    persistent = False
    hosts = None

    # Socket object
    sock = None

    # Get parameters
    if "-p" in sys.argv:
        port = int(sys.argv[sys.argv.index('-p') + 1])
    if "--port" in sys.argv:
        port = int(sys.argv[sys.argv.index('--port') + 1])
    if "-i" in sys.argv:
        interface = sys.argv[sys.argv.index('-i') + 1]
    if "--interface" in sys.argv:
        interface = sys.argv[sys.argv.index('--interface') + 1]
    if "-P" in sys.argv or "--persistent" in sys.argv:
        persistent = True
    if "-H" in sys.argv:
        hosts = sys.argv[sys.argv.index('-H') + 1]
    if "--hosts" in sys.argv:
        hosts = sys.argv[sys.argv.index('--hosts') + 1]
        
    if platform.startswith('win'):
	print "[*] Running on Windowss"
        print "[*] Starting [Exploit Pack] - Server.."
        print "[?] Listening on port:",port

    elif platform.startswith('linux'):
        print "[*] Running on Linux\n"
        print "[*] Starting [Exploit Pack] - Server..\n"
        print "[?] Listening on port:",port

    elif platform.startswith('darwin'):
        print "[*] Running on OSX\n"
        print "[*] Starting [Exploit Pack] - Server..\n"
        print "[?] Listening on port:",port
    else:
	print "[!] Sorry I could not detect the platform"


    # Turn hosts into an array
    if hosts:
        hosts = hosts.split(",")

    # Initialize a new socket and listen for a connection
    # Upon connection, create an interactive shell
    # Close the sockets once the shell is closed
    try:
        sock = Socket(port, interface)
        sock.listen(hosts)
        shell = Shell(sock, persistent)
        shell.interact()
        sock.close()
    except KeyboardInterrupt:
        sock.close()


# Prompt yes/no function
# @param string message
# @return bool
def prompt(message):
    answer = ""
    while (answer != "Y" and answer != "N"):
        answer = raw_input(message + " (Y/N): ")
        answer = answer.upper()
    return answer == "Y"


# Socket extension class
# Allows easy access to sockets for commands
class Socket:
    # Global class variables
    sock = None
    conn = None
    addr = None
    port = None
    interface = None

    # Socket constructor
    # Sets up a new socket on a given port and interface
    # @param int port
    # @param string interface
    # @return void
    def __init__(self, port=0, interface=""):
        try:
            self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            self.sock.bind((interface, int(port)))
        except socket.timeout:
            print("[!] Error: Connection timed out")
            self.close()
        except socket.error, err:
            print("[!] Error: Connection lost")
            print(err)
            self.close()

    # Listen on the given interface and port given in the constructor
    # Automatically accepts every connection and lets the program continue
    # @return void
    def listen(self, hosts=None):
        try:
            self.sock.listen(1)
            self.interface = self.sock.getsockname()[0]
            self.port = self.sock.getsockname()[1]
            if self.interface == "0.0.0.0":
                print("[+] Listening on <%s:%d>" % ("all-interfaces", self.port))
            else:
                print("[+] Listening on <%s:%d>" % (self.interface, self.port))

            self.conn, self.addr = self.sock.accept()
            self.conn.setblocking(0)
            print("[+] Got connection from <%s:%d>" % (self.addr[0], self.addr[1]))

            if hosts and self.addr[0] not in hosts:
                print("[-] Disconnecting host %s, not in hosts whitelist." % self.addr[0])
                print("")
                self.conn.shutdown(socket.SHUT_RDWR)
                self.listen(hosts)
        except socket.timeout:
            print("[!] Error: Connection timed out")
            self.close()
        except socket.error, err:
            print("[!] Error: Connection lost")
            print(err)
            self.close()

    # Send a socket message
    # Messages get sent in chunks of 2048 bytes
    # To change this, set the chunksize parameter
    # @param string message
    # @param int chunksize
    # @return void
    def send(self, message, chunksize=2048):
        for chunk in self._chunks(message, chunksize):
            self.conn.send(chunk)
        time.sleep(0.1)

    # Receive a socket string
    # Messages get received in chunks of 2048 bytes
    # To change this, set the chunksize parameter
    # @param bool print_output
    # @param int chunksize
    # @return string
    def receive(self, print_output=False, chunksize=2048):

        # Define global variables
        output = ""

        # Receive socket data
        try:
            while True:
                data = self.conn.recv(chunksize)
                output += data
                if print_output == True: sys.stdout.write(str(data))
                if not data: break
        except socket.timeout:
            print("[!] Error: Connection timed out")
            self.close()
        except socket.error, e:
            err = e.args[0]
            if err == errno.EAGAIN or err == errno.EWOULDBLOCK:
                return output
            else:
                print("[!] Error: Connection lost")
                self.close()

    # Try to close the current connection
    # Ignores any errors for when the connection is already closed
    # @return void
    def close(self, exit=True):
        try:
            self.sock.close()
            if exit: sys.exit()
        except socket.error, e:
            print("[!] Error: " + str(e))

    # Helper function to break a string into x chunks
    # @return list
    def _chunks(self, lst, chunksize):
        for i in xrange(0, len(lst), chunksize):
            yield lst[i:i + chunksize]


# Interactive shell client
# Core features of this script reside here
class Shell:
    # global variables
    sock = None
    persistent = None
    quit = False
    last_output = ""
    last_input = ""
    shell_prompt = ""
    prompts = ["> ", "% ", "$ ", "# "]

    # Shell constructor
    # Creates the interactive shell loop which keeps the sockets alive
    # @param Socket sock
    # @param bool persistent
    def __init__(self, sock, persistent=False):
        self.sock = sock
        self.persistent = persistent

    # Check if shell has prompt
    # @return bool
    def _has_prompt(self):
        return self.shell_prompt != "" and any(self.shell_prompt in s for s in Shell.prompts)

    # Get the shell prompt
    # @return string
    def _get_prompt(self):
        if self._has_prompt():
            return self.shell_prompt
        else:
            return "> "

    # Print the shell prompt
    # Buggy due to bad validation
    # @todo Fix double shell prompts from being printed
    # @return void
    def _print_prompt(self):
        sys.stdout.write(self._get_prompt())

    # Create the infinite loop in which the shell will reside
    # Shell is closed upon "rsh exit" or ^C if enabled
    # @return void
    def interact(self):
        time.sleep(0.1)
        print("                           ")
        print("[?] Exit command: rsh exit ")
        print("[+] Happy hacking!         ")
        while True:
            self.output()
            self.input()
            if self.quit:
                print("[+] Closing shell..")
                break

    # Get shell output
    # Filters out common errors such as the command appearing in the first line
    # Of a bash reverse shell, additionally it adds a neat little shell prompt if none was found
    # @return void
    def output(self):
        self.last_output = self.sock.receive(True)
        if self.last_output != None and self.last_output != "" and self._has_prompt() == False:
            self.shell_prompt = self.last_output[-2:]

    # Get shell input
    # @return void
    def input(self):

        # Fetch command
        try:
            if (self._has_prompt()):
                command = raw_input("")
            else:
                command = raw_input(self._get_prompt())

            # Check if the command is a RSH command
            if command == "rsh exit":
                self.quit = True
                return

            # Send the command the the active socket
            self.sock.send(command + "\n")

        # Catch ^C input and handle it
        except KeyboardInterrupt:
            if self.persistent:
                self.sock.send(struct.pack('B', int("0x03", 16)))
            else:
                self.quit = True
                print("")


# Call main
if __name__ == "__main__":
    main()
