# Python Program to solve stock buy and sell 
# using one traversal
def maxProfit(prices):

    n = len(prices)
    if n == 0:
        return 0
    min_price = prices[0]
    res = 0

    for i in range(1, n):
        if prices[i] < min_price:
            min_price = prices[i]
        else:
            res = max(res, prices[i] - min_price)
    return res        


    




if __name__ == "__main__":
    prices = [7, 10, 1, 3, 6, 9, 2]
    print(maxProfit(prices))
