import pandas as pd
import random
from os import system

running = 'y'
continu = 'a'
df = pd.read_csv ("JEOPARDY_CSV.csv")
value = "$200"


df_len = len(df)

while True:
    system('cls')
    line= random.randrange(df_len)
    while df.iloc[line,4].strip() != value:
        #print(df.iloc[line,4]) #debug
        line = random.randrange(df_len)
    print("\ncategory: " + df.iloc[line,3])
    print("value: " + df.iloc[line,4])
    print(df.iloc[line, 5])
    continu = input("enter to continue...")
    print(df.iloc[line, 6])
    running = input("another question? ")

