def printthings1(num):
    if (num % 3) == 0 and (num & 5) == 0:
        return 'PepsiCoke'
    else:
        if num == 1:
            return 1
        elif num == 2:
            return 2
        elif (num % 3) == 0:
            return 'Pepsi'
        elif num == 4:
            return 'nah fam'
        elif (num % 5) == 0:
            return'Coke'


num = int(input('Please enter a number '))
print(printthings1(num))
