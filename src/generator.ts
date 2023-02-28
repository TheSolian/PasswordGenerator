export function generatePassword(
  length: number,
  includeLowerCase: boolean,
  inludeUppercase: boolean,
  includeNumbers: boolean,
  includeSpecialCharacters: boolean
) {
  const lowercase: string = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase: string = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  const numbers: string = '0123456789'
  const specialCharacters: string = '!@#$%^&*+='

  let allowedCharacters: string = ''

  if (includeLowerCase) allowedCharacters += lowercase
  if (inludeUppercase) allowedCharacters += uppercase
  if (includeNumbers) allowedCharacters += numbers
  if (includeSpecialCharacters) allowedCharacters += specialCharacters

  let password: string = ''
  for (let i = 0; i < length; i++) {
    password +=
      allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
  }

  return password
}
