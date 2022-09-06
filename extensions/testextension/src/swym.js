export let swymData = [
  {
    id: 1,
    title: "Plan 1",
    delivery: "3",
    percent: "10",
  },
  {
    id: 2,
    title: "Plan 2",
    delivery: "5",
    percent: "5",
  },
  {
    id: 3,
    title: "Plan 3",
    delivery: "2",
    percent: "15",
  },
  {
    id: 4,
    title: "Plan 4",
    delivery: "2",
    percent: "20",
  },
];

export async function setSwymData(data) {
  swymData.push(data);

  console.log(swymData);

  return swymData;
}
