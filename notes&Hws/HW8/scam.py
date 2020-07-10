# Function for simple scam. Prints simple message based on 3 input variables: target name (x), promised earnings(y) and scam phone number (z).
# Change values according to defined data type

#define function
def SpamScam(x, y, z):
        s= "Labdien %s, \nVeiksme ir Jūsu pusē, Iespēja laimēt %d EUR!\nLai piedalītos, sūti īsziņu ar kodu 'Zādzība' uz numuru %d (maksa 3EUR),\nTurku labdarības fonds\n"%(x,y,z)
        print(s)


# x =  name, y = promised earnings(in EUR) z = phone number
# use string for x, decimal for y and z

x= "Laimonis"
y= 15
z = 1553

#invoke function
SpamScam(x, y, z)

