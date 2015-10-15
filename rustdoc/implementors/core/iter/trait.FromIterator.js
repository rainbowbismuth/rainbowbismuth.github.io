(function() {var implementors = {};
implementors['hamt'] = ["impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='hamt/rc/struct.HamtRc.html' title='hamt::rc::HamtRc'>HamtRc</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(&amp;'a K, &amp;'a V)</a>&gt; for <a class='struct' href='hamt/rc/struct.HamtRc.html' title='hamt::rc::HamtRc'>HamtRc</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;K&gt; for <a class='struct' href='hamt/rc/struct.HamtSetRc.html' title='hamt::rc::HamtSetRc'>HamtSetRc</a>&lt;K&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a K&gt; for <a class='struct' href='hamt/rc/struct.HamtSetRc.html' title='hamt::rc::HamtSetRc'>HamtSetRc</a>&lt;K&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='hamt/arc/struct.HamtArc.html' title='hamt::arc::HamtArc'>HamtArc</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(&amp;'a K, &amp;'a V)</a>&gt; for <a class='struct' href='hamt/arc/struct.HamtArc.html' title='hamt::arc::HamtArc'>HamtArc</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, V: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;K&gt; for <a class='struct' href='hamt/arc/struct.HamtSetArc.html' title='hamt::arc::HamtSetArc'>HamtSetArc</a>&lt;K&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;&amp;'a K&gt; for <a class='struct' href='hamt/arc/struct.HamtSetArc.html' title='hamt::arc::HamtSetArc'>HamtSetArc</a>&lt;K&gt; <span class='where'>where K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
