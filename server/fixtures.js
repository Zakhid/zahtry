if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'МЧС',
    kind: '1',
    descr: 'Штаб',
    latitude: '42.8785403',
    longtitude: '74.6242235',
    level: '3'
  });
  
  Posts.insert({
    title: 'Главпочтамт',
    kind: '2',
    descr: 'Связь',
    latitude: '42.8746711',
    longtitude: '74.6126176',
    level: '2'
  });
  
  Posts.insert({
    title: '7этаж',
    kind: '3',
    descr: 'Хранилище',
    latitude: '42.8771752',
    longtitude: '74.600313',
    level: '5'
  });
}