interface asset_usage {
  id: number;
  from: Date;
  to: Date;
  asset_id: number;
  state_id: number;
  site_id: number;
  backgroundColor: string;
}
interface asset_usage_state {
  id: number;
  label: string;
  // planned, active, history
}
interface site {
  id: number;
  label: string;
}
interface asset {
  id: number;
  label: string;
  group_id: number;
}
interface asset_group {
  id: number;
  label: string;
}
export const asset_group: asset_group[] = [
  {
    id: 1,
    label: "Bagger",
  },
  {
    id: 2,
    label: "Radlader",
  },
  {
    id: 3,
    label: "Walzen",
  },
];
export const asset: asset[] = [
  {
    id: 1,
    label: "Bagger #01",
    group_id: 1,
  },
  {
    id: 2,
    label: "Bagger #02",
    group_id: 2,
  },
  {
    id: 3,
    label: "Bagger #03",
    group_id: 3,
  },
];
export const asset_usage: asset_usage[] = [
  {
    id: 1,
    from: new Date("2023, 01, 1"),
    to: new Date("2023, 1, 31"),
    asset_id: 1,
    state_id: 2,
    site_id: 1,
    backgroundColor: "red",
  },
  {
    id: 2,
    from: new Date("2023, 02, 1"),
    to: new Date("2023, 2, 15"),
    asset_id: 2,
    state_id: 1,
    site_id: 2,
    backgroundColor: "green",
  },
  {
    id: 3,
    from: new Date("2023, 06, 1"),
    to: new Date("2023, 7, 10"),
    asset_id: 3,
    state_id: 2,
    site_id: 3,
    backgroundColor: "blue",
  },
];
