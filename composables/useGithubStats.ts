export const useGithubStats = () => {
  const getRepoStats = async (repo: string) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo}`)
      const data = await response.json()
      return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        description: data.description || '',
        author: {
          name: data.owner.login,
          avatar: data.owner.avatar_url,
          url: data.owner.html_url
        }
      }
    } catch (error) {
      console.error('Error fetching GitHub stats:', error)
      return { 
        stars: 0, 
        forks: 0, 
        description: '',
        author: null
      }
    }
  }

  return {
    getRepoStats
  }
}
