var searchIndex = {};
searchIndex['dummy_crate'] = {"items":[],"paths":[]};
searchIndex['hamt'] = {"items":[[0,"","hamt","",null,null],[0,"rc","","",null,null],[3,"HamtRc","hamt::rc","A persistent hash array mapped trie implementation using reference counting.",null,null],[3,"Iter","","A key value iterator that iterates in an unspecified order.",null,null],[3,"Keys","","Key iterator",null,null],[3,"Values","","Value iterator",null,null],[3,"HamtSetRc","","",null,null],[11,"fmt","","",0,{"inputs":[{"name":"hamtrc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"hamtrc"}}],[11,"clone","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[11,"clone","","",2,{"inputs":[{"name":"keys"}],"output":{"name":"keys"}}],[11,"clone","","",3,{"inputs":[{"name":"values"}],"output":{"name":"values"}}],[11,"next","","",2,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"eq","","",0,{"inputs":[{"name":"hamtrc"},{"name":"hamtrc"}],"output":{"name":"bool"}}],[11,"next","","",1,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",1,null],[11,"from_iter","","",0,{"inputs":[{"name":"hamtrc"},{"name":"t"}],"output":{"name":"self"}}],[11,"from_iter","","",0,{"inputs":[{"name":"hamtrc"},{"name":"t"}],"output":{"name":"self"}}],[11,"index","","",0,{"inputs":[{"name":"hamtrc"},{"name":"q"}],"output":{"name":"output"}}],[11,"new","","Creates an empty map.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"self"}}],[11,"len","","Returns how many key value pairs are in the map.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if there are no key value pairs in the map, false otherwise.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"bool"}}],[11,"iter","","Returns a key value iterator.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"iter"}}],[11,"keys","","Returns an iterator that visits every key in an unspecified order.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator that visits every value in an unspecified order.",0,{"inputs":[{"name":"hamtrc"}],"output":{"name":"values"}}],[11,"get","","Returns a reference to the value corresponding to the given key, or None if there\nis no value associated with the key.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"}],"output":{"name":"option"}}],[11,"contains_key","","Returns true if the map contains the given key.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"}],"output":{"name":"bool"}}],[11,"insert","","Returns a new map that includes the given key value pair, replacing the old value\nif the key was already in the map.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"},{"name":"r"}],"output":{"name":"self"}}],[11,"remove","","Returns a new map without an entry corresponding to the given key.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"}],"output":{"name":"self"}}],[11,"adjust","","Modifies the value tied to the given key with the function `f`. Otherwise, the map returned is identical.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"update","","Updates the value at the given key using `f`. If `f` returns None, then the entry\nis removed.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"alter","","Updates the value at the given key using `f` as in `Self::update`. If no value exists for\nthe given key, then `f` is passed `None`.",0,{"inputs":[{"name":"hamtrc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"fmt","","",4,{"inputs":[{"name":"hamtsetrc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"hamtsetrc"}],"output":{"name":"hamtsetrc"}}],[11,"eq","","",4,{"inputs":[{"name":"hamtsetrc"},{"name":"hamtsetrc"}],"output":{"name":"bool"}}],[11,"from_iter","","",4,{"inputs":[{"name":"hamtsetrc"},{"name":"t"}],"output":{"name":"self"}}],[11,"from_iter","","",4,{"inputs":[{"name":"hamtsetrc"},{"name":"t"}],"output":{"name":"self"}}],[11,"new","","Returns an empty set.",4,{"inputs":[{"name":"hamtsetrc"}],"output":{"name":"self"}}],[11,"len","","Returns how many items are in the set.",4,{"inputs":[{"name":"hamtsetrc"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the set is empty, false otherwise.",4,{"inputs":[{"name":"hamtsetrc"}],"output":{"name":"bool"}}],[11,"insert","","Inserts an item into the set.",4,{"inputs":[{"name":"hamtsetrc"},{"name":"q"}],"output":{"name":"self"}}],[11,"contains","","Returns true if the set contains the given item, false otherwise.",4,{"inputs":[{"name":"hamtsetrc"},{"name":"q"}],"output":{"name":"bool"}}],[11,"remove","","Removes the given item from the set.",4,{"inputs":[{"name":"hamtsetrc"},{"name":"q"}],"output":{"name":"self"}}],[11,"iter","","Iterates over each item in the set in an unspecified order.",4,{"inputs":[{"name":"hamtsetrc"}],"output":{"name":"keys"}}],[0,"arc","hamt","",null,null],[3,"HamtArc","hamt::arc","A persistent hash array mapped trie implementation using reference counting.",null,null],[3,"Iter","","A key value iterator that iterates in an unspecified order.",null,null],[3,"Keys","","Key iterator",null,null],[3,"Values","","Value iterator",null,null],[3,"HamtSetArc","","",null,null],[11,"fmt","","",5,{"inputs":[{"name":"hamtarc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"hamtarc"}}],[11,"clone","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[11,"clone","","",7,{"inputs":[{"name":"keys"}],"output":{"name":"keys"}}],[11,"clone","","",8,{"inputs":[{"name":"values"}],"output":{"name":"values"}}],[11,"next","","",7,{"inputs":[{"name":"keys"}],"output":{"name":"option"}}],[11,"next","","",8,{"inputs":[{"name":"values"}],"output":{"name":"option"}}],[11,"eq","","",5,{"inputs":[{"name":"hamtarc"},{"name":"hamtarc"}],"output":{"name":"bool"}}],[11,"next","","",6,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"from_iter","","",5,{"inputs":[{"name":"hamtarc"},{"name":"t"}],"output":{"name":"self"}}],[11,"from_iter","","",5,{"inputs":[{"name":"hamtarc"},{"name":"t"}],"output":{"name":"self"}}],[11,"index","","",5,{"inputs":[{"name":"hamtarc"},{"name":"q"}],"output":{"name":"output"}}],[11,"new","","Creates an empty map.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"self"}}],[11,"len","","Returns how many key value pairs are in the map.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if there are no key value pairs in the map, false otherwise.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"bool"}}],[11,"iter","","Returns a key value iterator.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"iter"}}],[11,"keys","","Returns an iterator that visits every key in an unspecified order.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"keys"}}],[11,"values","","Returns an iterator that visits every value in an unspecified order.",5,{"inputs":[{"name":"hamtarc"}],"output":{"name":"values"}}],[11,"get","","Returns a reference to the value corresponding to the given key, or None if there\nis no value associated with the key.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"}],"output":{"name":"option"}}],[11,"contains_key","","Returns true if the map contains the given key.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"}],"output":{"name":"bool"}}],[11,"insert","","Returns a new map that includes the given key value pair, replacing the old value\nif the key was already in the map.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"},{"name":"r"}],"output":{"name":"self"}}],[11,"remove","","Returns a new map without an entry corresponding to the given key.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"}],"output":{"name":"self"}}],[11,"adjust","","Modifies the value tied to the given key with the function `f`. Otherwise, the map returned is identical.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"update","","Updates the value at the given key using `f`. If `f` returns None, then the entry\nis removed.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"alter","","Updates the value at the given key using `f` as in `Self::update`. If no value exists for\nthe given key, then `f` is passed `None`.",5,{"inputs":[{"name":"hamtarc"},{"name":"q"},{"name":"f"}],"output":{"name":"self"}}],[11,"fmt","","",9,{"inputs":[{"name":"hamtsetarc"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"hamtsetarc"}],"output":{"name":"hamtsetarc"}}],[11,"eq","","",9,{"inputs":[{"name":"hamtsetarc"},{"name":"hamtsetarc"}],"output":{"name":"bool"}}],[11,"from_iter","","",9,{"inputs":[{"name":"hamtsetarc"},{"name":"t"}],"output":{"name":"self"}}],[11,"from_iter","","",9,{"inputs":[{"name":"hamtsetarc"},{"name":"t"}],"output":{"name":"self"}}],[11,"new","","Returns an empty set.",9,{"inputs":[{"name":"hamtsetarc"}],"output":{"name":"self"}}],[11,"len","","Returns how many items are in the set.",9,{"inputs":[{"name":"hamtsetarc"}],"output":{"name":"usize"}}],[11,"is_empty","","Returns true if the set is empty, false otherwise.",9,{"inputs":[{"name":"hamtsetarc"}],"output":{"name":"bool"}}],[11,"insert","","Inserts an item into the set.",9,{"inputs":[{"name":"hamtsetarc"},{"name":"q"}],"output":{"name":"self"}}],[11,"contains","","Returns true if the set contains the given item, false otherwise.",9,{"inputs":[{"name":"hamtsetarc"},{"name":"q"}],"output":{"name":"bool"}}],[11,"remove","","Removes the given item from the set.",9,{"inputs":[{"name":"hamtsetarc"},{"name":"q"}],"output":{"name":"self"}}],[11,"iter","","Iterates over each item in the set in an unspecified order.",9,{"inputs":[{"name":"hamtsetarc"}],"output":{"name":"keys"}}]],"paths":[[3,"HamtRc"],[3,"Iter"],[3,"Keys"],[3,"Values"],[3,"HamtSetRc"],[3,"HamtArc"],[3,"Iter"],[3,"Keys"],[3,"Values"],[3,"HamtSetArc"]]};
initSearch(searchIndex);
