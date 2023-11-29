function formatTimeRange(departureTime: string, duration: number): string {
  const departure = new Date(departureTime);
  const arrival = new Date(departure.getTime() + duration * 60 * 1000);

  const formatTime = (time: Date): string => {
    return time.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };

  const formattedDeparture = formatTime(departure);
  const formattedArrival = formatTime(arrival);

  return `${formattedDeparture} – ${formattedArrival}`;
}

export { formatTimeRange };
