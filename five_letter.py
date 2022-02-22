a = open("YeniMetinBelgesi.txt","r",encoding="UTF-8").read().split("\n")
a=[i for i in a if len(i)==5]
print(a)

# run this code in jupiter