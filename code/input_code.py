import math

print("----------------Example Code-----------------")

# a function that sums all numbers from 1 to n
def sumTo(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total
    
name = "Bob Bobbington"
print("My name is " + name)
print("My first name is " + name.split(" ")[0])

last_name = name.split(" ")[1]
print("The first 3 letters of my last name are '" + last_name[:3] + "'")

print("\n-----------------Math Stuff------------------")

print("The sum of numbers from 1..10 = " + str(sumTo(10)))
print("10^2 = " + str(pow(10, 2)))
print("Pi = " + str(math.pi))

print("\n-----------------Misc Stuff------------------")

# a function that converts a number to a binary string
def dec_to_bin(num):
    bin = ""
    while num >= 1:
        bin = str(num % 2) + bin 
        num /= 2
    return bin
    
# a function that converts a binary string into a d
# ecimal numbver
def bin_to_dec(bin):
    power = len(bin) - 1;
    num = 0
    for b in bin:
        num += pow(2 * int(b), power)
        power -= 1
    return num
        

    
print("33 in binary is: " + dec_to_bin(33))
print("111111 in decimal is: " + str(bin_to_dec("111111")))

