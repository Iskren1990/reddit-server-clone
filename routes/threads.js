
module.exports = (router) => {

  // module responsible for thread routes
  
  // Returns all threads
  router.get('/threads',() => console.log('GET threads route'));

  // Returns single thread by thread ID
  router.get('/threads/:id',() => console.log('GET threads route'));

  // Creates a new thread
  router.post('/threads',() => console.log('POST new thread route'));
}