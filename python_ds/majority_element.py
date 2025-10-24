def findMajorityElement(arr):

    num =(len(arr) // 3)

    count_map= {}
    new_Arr = []
    for i in arr:
        if i in count_map:
            count_map[i] += 1
        else:
            count_map[i] = 1

    for element,frequency in count_map.items():
        if frequency > num:
            new_Arr.append(element)

    return sorted(new_Arr)

print(findMajorityElement([3,3,2,3,5,6,7]))
    