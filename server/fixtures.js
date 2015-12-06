if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'МЧС',
    kind: '1',
    descr: 'Штаб',
    longtitude: '42.8785403',
    latitude: '74.6242235',
    level: '3'
  });
  
  Posts.insert({
    title: 'Главпочтамт',
    kind: '2',
    descr: 'Связь',
    longtitude: '42.8746711',
    latitude: '74.6126176',
    level: '2'
  });
  
  Posts.insert({
    title: '7этаж',
    kind: '3',
    descr: 'Хранилище',
    longtitude: '42.8771752',
    latitude: '74.600313',
    level: '5'
  });
}