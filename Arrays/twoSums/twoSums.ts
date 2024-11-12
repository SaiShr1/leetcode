const nums: number[] = [2, 7, 11, 15]
const target: number = 9

const twoSum = (nums: number[], target: number): number[] => {
    const mapObj: {[key:number]:number} = {}
    
    for (let i = 0; i < nums.length; i++) { 
        const diff = target - nums[i]
        if (mapObj.hasOwnProperty(diff)) {
            return [mapObj[diff]!, i]
        } else { 
            mapObj[nums[i]] = i;
        }
    }
    return []
};