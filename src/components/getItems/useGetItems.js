
import { useEffect, useState, useCallback } from 'react';
import { getRandomItemsWithProbability } from './helpers';
import { useSelector } from 'react-redux'
import { getList } from '../../redux/selectors';

export default function useGetItems() {
    const list = useSelector(getList)
    const [selectedItems, setSelectedItems] = useState([])

    const handleRefresh = useCallback(() => {
        setSelectedItems(getRandomItemsWithProbability(list))
    }, [list])

    useEffect(() => {
        list.length > 4 && handleRefresh(list)
    }, [list, handleRefresh])

    return {
        selectedItems,
        allItemsCount: list.length,
        handleRefresh,
    }
}