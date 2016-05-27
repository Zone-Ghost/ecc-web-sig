ecc-web-sig
===

Convert between the special snowflake ECC signatures that web crypto creates and the normal DER ones produced by everyone else.

provides 2 methods

- `toDer` which takes a web crypto signature and returns a DER formatted one
- `fromDer` which takes a DER formatted one and the curve and returns a web crypto one.
