import { compare, hash } from 'bcrypt';

export class BcryptAdapter {
  static isEqual = async (string: string, toCompare: string) =>
    await compare(string, toCompare);

  static toHash = (value: string) => hash(value, 12);
}
