cd dummy-crate
cargo doc
cd ..
cp -r dummy-crate/target/doc/* rustdoc
