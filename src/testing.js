import bcrypt from 'bcrypt'

const hash=await bcrypt.hash("sahbaz",10);
console.log(hash);

const isMatch=await bcrypt.compare("sahbaz",hash);
console.log(isMatch)
