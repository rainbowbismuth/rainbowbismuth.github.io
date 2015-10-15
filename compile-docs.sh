cd dummy-crate
cargo update
cargo doc
cd ..
cp -r dummy-crate/target/doc/* rustdoc
