class Github {
    constructor(){
        this.client_id = 'f8e6ab1782eb54355932';
        this.client_secret =  '069880c1d59aa67eedbdf1a2dedf556d6f339bc7';
        this.repos_count = 5; 
        this.repos_sort = 'created: asc';     
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);        

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        

        return {
            profile,
            repos
        }
    }
}