

export const getProbability = (weight, list) => {
    let weightCount = 0
    let allItemsCount = 0
    list.forEach((item) => {
        allItemsCount += item.quantity; 
        if (item.weight === weight) {
            weightCount += item.quantity;
        }
    })
    return (weightCount / allItemsCount * 100).toFixed(2) + "%";
}

const getRandomNumber = (maxIndex) => {
    return Date.now() % maxIndex
}

export const getRandomItemsWithProbability = (list) => {
    const randomItems = {};
    const len = list.length;
    do {
        const randomIndex = getRandomNumber(len)
        if (randomItems.hasOwnProperty(randomIndex)) continue;
        randomItems[randomIndex] = {
                ...list[randomIndex],
                probability: getProbability(list[randomIndex].weight, list)
            }
    } while (Object.values(randomItems).length !== 5)
    return Object.values(randomItems);
}