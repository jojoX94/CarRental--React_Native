// create a function that takes a datetime and returns a formatted date string without using moment library like this: jjj, dd mmm yyyy, hh:mm

export const formatDate = (date: Date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = days[date.getDay()];
  const dd = date.getDate();
  const mmm = date.toLocaleString('default', {month: 'short'});
  const yyyy = date.getFullYear();
  const hh = date.getHours();
  const mm = date.getMinutes();

  return `${day}, ${dd} ${mmm} ${yyyy}, ${hh}:${mm}`;
};
