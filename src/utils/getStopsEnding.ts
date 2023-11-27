function getStopsEnding(number: number): string {
  return number % 100 > 4 && number % 100 < 20
    ? 'пересадок'
    : ['пересадка', 'пересадки', 'пересадка'][
        (number % 10 !== 1 || number % 100 === 11) && number % 10 >= 2 && number % 10 <= 4 ? 1 : 2
      ];
}

export { getStopsEnding };
