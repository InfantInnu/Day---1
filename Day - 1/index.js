// 2.write a blog on difference between http1.1 vs http2 ?
// http1.1
// 1) key Features- It support connection reuse for every TCP connection 
//     there could be multiple requests and responses and pipelining where the clinent can 
//     request several resources from the server at once.
// 2)Status Code - It introduce a warning header filed to carry additional information about the status of message .
// 3)Authentication Mechanism - It is relatively secure since it is uses digest authentication,NTLM authentication.
// 4)Caching - It expands on the caching support by using additional headers like cachecontrol, conditional header 
//       like If match and by using entity tags.
// 5)Web Traffic - HTTP/1.1 provides faster delivery of web pages and reduces web traffic as compared to HTTP/1.0. 


// http2
// 1)key Features- Uses multiplexing, where over a single TCP connection resources to be delivered are interleaved 
//        and arrive at the client almost at the same timeIt also provides a feature called server push that allows the 
//        server to send data that the client will need but has not yet requested.
// 2)Status Code - Underlying semantics of HTTP such as headers, status codes remains the same.
// 3)Authentication Mechanism - Security concerns from previous versions will continue to be seen in HTTP/2. However,
//         it is better equipped to deal with them due to new TLS features like connection error of type Inadequate_Security.
// 4)Caching - HTTP/2 does not change much in terms of caching. With the server push feature if the client finds the resources 
//           are already present in the cache, it can cancel the pushed stream.
// 5)Web Traffic - HTTP/2 utilizes multiplexing and server push to effectively reduce the page load time by a greater margin 
//              along with being less sensitive to network delays.



// 3.Write a blog about objects and its internal representation in Javascript?
// Objects- Objects consist of key value pairs (Number, String, Boolean, null, undefined and symbol)
// Internal representation in JS-
//   syntax: objectName.propertyName
// example-1: var myCar = new Object();
//           myCar.make = 'Ford';
//           myCar.model = 'Mustang';
//           myCar.year = 1969;
// example-2: var person = new Object();
//            person.firstName = “John”;
//            person.lastName = “Doe”;
//            person.age = 25;
