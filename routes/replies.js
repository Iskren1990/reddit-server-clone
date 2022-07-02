
module.exports = (router) => {

  // module responsible for thread replies routes
  
  // Returns all replies for single thread
  router.get('/replies/:threadId',() => console.log('GET threads route'));

  // Creates a new reply
  router.post('/reply/:threadId',() => console.log('POST new thread route'));
}