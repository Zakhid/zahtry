if (Posts.find().count() === 0) {
  Posts.insert({
    title: '���',
    kind: '1',
    descr: '����',
    longtitude: '42.8785403',
    latitude: '74.6242235',
    level: '3'
  });
  
  Posts.insert({
    title: '�����������',
    kind: '2',
    descr: '�����',
    longtitude: '42.8746711',
    latitude: '74.6126176',
    level: '2'
  });
  
  Posts.insert({
    title: '7����',
    kind: '3',
    descr: '���������',
    longtitude: '42.8771752',
    latitude: '74.600313',
    level: '5'
  });
}