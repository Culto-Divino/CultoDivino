import crypto from 'crypto'

const config = useRuntimeConfig()

class Authenticator {
  static generatePasswordHash(password: string) {
    return crypto.createHash('sha256').update(password).digest('hex')
  }

  static verifyPassword(password: string, dbHash: string) {
    const passwordHash = crypto
      .createHash('sha256')
      .update(password)
      .digest('hex')

    return passwordHash === dbHash
  }

  static generateUserAuthToken() {
    const token = crypto
      .createHash('sha256')
      .update(`${Date.now()} ${process.uptime() / 19}`)
      .digest('hex')
    const validityTime =
      Date.now() + Number(config.TOKEN_VALIDITY_TIME_DAYS) * 24 * 60 * 60 * 1000

    return { token, validityTime }
  }

  static verifyUserAuthToken(
    userClaim: string,
    dbToken: string,
    dbTokenValidDate: number
  ) {
    if (Date.now() >= dbTokenValidDate || userClaim !== dbToken) {
      return false
    }
    return true
  }
}

export default Authenticator
