# UTF-Locator
# Juan Sacco
import sys


def utflocator():
    try:
        print "[*} Printing a bunch of UTF chars for you! Please wait.."
        print "[*} Max unicode is:", sys.maxunicode
        locator = ""
        for i in xrange(int(sys.argv[1])):
            locator += unichr(i)
            print "[!] UTF Locator - Processing, please wait."
        f = open("utflocator.txt", 'w')
        f.write(locator.encode('utf8'))
        f.close()
    except OSError as e:
        if e.errno == os.errno.ENOENT:
            print "Sorry, there was a problem"
        else:
            print "Error executing module"
        raise


def howtousage():
    print "Snap! Something went wrong"
    sys.exit(-1)


if __name__ == '__main__':
    try:
        print "[*} UTF - Locator for Exploit Pack"
        print "[*} Author: Juan Sacco <jsacco@exploitpack.com>"
    except IndexError:
        howtousage()
utflocator()

