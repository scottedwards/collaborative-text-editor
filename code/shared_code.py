def sumTo(num):
    return (num * (num - 1)) / 2

name = "Bob Bobbington"

print("--------Example Program--------")
print("My name is " + name);
print("My first name is " + name.split(" ")[0])
print("First three letters of last name are " + name.split(" ")[1][:3])

print("--------Math Stuff--------")
print("10 * 1.5 = " + str(10 * 1.5))
print("The sum of all number from 1 to 10 = " + str(sumTo(10)))

for i in range(0, 10):
    print(i)