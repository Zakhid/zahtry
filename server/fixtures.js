if (Posts.find().count() === 0) {
  Posts.insert({
    title: '���',
    kind: '1',
    descr: '����',
    longtitude: '74.6242235',
    latitude: '42.8785403',
    level: '3'
  });
  
  Posts.insert({
    title: '�����������',
    kind: '2',
    descr: '�����',
    longtitude: '74.6126176',
    latitude: '42.8746711',
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