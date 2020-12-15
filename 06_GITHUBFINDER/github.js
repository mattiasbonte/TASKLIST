class Github {
  constructor() {
    this.client_id = '1500ae0046722fff44f5';
    this.client_secret = '74bc5fcec908cbcf6dfcc0621429ce9e7adf3ae7';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return { profile };
  }
}
