function convertMinutesToHoursAndMinutes(duration: number): string {
  if (duration < 0) {
    return 'Неверное значение длительности';
  }

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  const hoursText = hours > 0 ? `${hours} ч` : '';
  const minutesText = minutes > 0 ? `${minutes} мин` : '';

  if (hours > 0 && minutes > 0) {
    return `${hoursText} ${minutesText}`;
  } else {
    return hoursText + minutesText;
  }
}

export { convertMinutesToHoursAndMinutes };
