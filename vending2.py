products = {'chips' : 10, 'sting' : 10, 'dairymilk' : 10}

totalMoney = 0

while True:
    print('Welcome User')
    print('Products available in vending machine')
    print(f"chips --- {products['chips']} | prize = 15 \nsting ---- {products['sting']} | prize = 22 \ndairymilk ---- {products['dairymilk']} | prize = 50") 
    print(f"Total collected Money : {totalMoney}")
    if products['chips']>0 or products['sting']>0 or products['dairymilk']>0:
        order = input("enter the product name : ")
        if order == 'chips':
            quantity = int(input("How Many chips you want : "))
            prize = eval(input(f"please pay {15*quantity} rupees : "))
            if prize == 15*quantity:
                print("congratulations you got your chips \nThank you!")
                products['chips']-=quantity 
                totalMoney += 15*quantity
            elif prize>15*quantity:
                print(f"congratulations you got your chips \ncollect your changes {prize-15*quantity} \nThank you!")
                products['chips']-=quantity 
                totalMoney +=15*quantity
            elif prize<15:
                print(f"Sorry ! you paid only {prize}. \n you have to pay {15*quantity} rupees. \nThank you!") 
    

        elif order == 'sting':
            quantity = int(input("How Many sting you want : "))
            prize = eval(input(f"please pay {22*quantity} rupees : "))
            if prize == 22*quantity:
                print("congratulations you got your sting \nThank you!")
                products['sting']-=quantity
                totalMoney +=22*quantity
            elif prize>22:
                print(f"congratulations you got your sting \ncollect your changes {prize-22*quantity} \nThank you!")
                products['sting']-=quantity 
                totalMoney +=22*quantity
            elif prize<22:
                print(f"Sorry ! you paid only {prize}. \n you have to pay 22 rupees. \nThank you!") 


        elif order == 'dairymilk':
            quantity = int(input("How Many dairymilk you want : "))
            prize = eval(input(f"please pay {50*quantity} rupees : "))
            if prize == 50*quantity:
                print("congratulations you got your dairymilk \nThank you!")
                products['dairymilk']-quantity 
                totalMoney +=50*quantity
            elif prize>50:
                print(f"congratulations you got your dairymilk \ncollect your changes {prize-50*quantity} \nThank you!")
                products['dairymilk']-=quantity
                totalMoney +=50*quantity
            elif prize<50:
                print(f"Sorry ! you paid only {prize}. \n you have to pay 50 rupees. \nThank you!") 