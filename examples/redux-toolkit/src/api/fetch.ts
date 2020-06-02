export const nextCountAPI = (currentCount: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentCount + 1);
    }, 1000);
  });
};
