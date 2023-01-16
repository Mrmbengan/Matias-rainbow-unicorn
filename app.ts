function animal():string[] {
    return new Array("apa", "orangutang", "gorilla", "get", "giraff")
} 

const nums:string[] = animal()
for (const i in nums) {
    console.log(nums[i])
}

const obj: { name: string, age: number, beginner: boolean } = {
    name: "Matias",
    age: 37,
    beginner: true,
  };