""" Input format - 
Food item - weight in gms - protein in gms
1 banana - 80gm - 10g
1 apple - 90gm - 20g
1 cheese - 20gm - 15g
1 mango - 50gm - 5g and so on 
[[banana, 80, 10], [apple, 90, 20], [cheese, 20, 15], [mango, 50, 5]]"""

# foods and goals are given inputs
food = [['banana', 80, 6], ['apple', 90, 8]]
goal = 1000
min_cal = goal - 100
max_cal = goal + 100
min_pr = (0.2*min_cal)/4
max_pr = (0.3*max_cal)/4
quantity = [0 for x in range(len(food))]

def recursion(i, j, food, quantity):
    if(j > 5):
        return 0
    if(i == len(food) and j == 1):
        return 0

    if(i == len(food)):
        # picked up elements in range 2-5
        cal = 0
        pr = 0
        ans = ""
        for k in range(len(food)):
            q = quantity[k]/4
            cal += (food[k][1]*q)
            pr += (food[k][2]*q)
            if(quantity[k] > 0):
                ans += ("["+food[k][0]+","+str(quantity[k]/4)+"] ")
        if((cal >= min_cal and cal <= max_cal) and (pr >= min_pr and pr <= max_pr)):
            print(ans)
            return 1
        else:
            return 0

    for k in range(41):
        quantity[i] = k
        if(k > 0):
            temp = recursion(i+1, j+1, food, quantity)
            if(temp == 1):
                return 1
        else:
            temp = recursion(i+1, j, food, quantity)
            if(temp == 1):
                return 1

recursion(0, 0, food, quantity)