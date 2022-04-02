import { RepoCard } from "../components/RepoCard";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";


const sortRepos = (resp) => {
    let repos = resp;
    repos.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
    // save to session storage
    sessionStorage.setItem("prescarlton_repos", JSON.stringify(repos));
    return repos;
};

export default function ProjectArchive() {
    const [repoList, setRepoList] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        // check session storage first
        if (sessionStorage.getItem("prescarlton_repos"))
            setRepoList(
                JSON.parse(sessionStorage.getItem("prescarlton_repos"))
            );
        // fetch repo list
        else
            fetch("https://api.github.com/users/prescarlton/repos").then(
                (res) => {
                    res.json().then((data) => {
                        // if error, setErrorMsg
                        if (data.message) {
                            setErrorMsg(true);
                        } else {
                            setRepoList(sortRepos(data));
                        }
                    });
                }
            );
    }, []);
    return (
        <Layout pageTitle="project archive">
            {!repoList && !errorMsg && <h1>Loading...</h1>}
            {repoList &&
                repoList.map((repo) => {
                    return <RepoCard {...repo} key={repo.id} />;
                })}

            {errorMsg && (
                <div>
                    <h1 className="text-3xl">Well this is awkward.</h1>
                    <h2>
                        I'm currently using GitHub's free API so I don't have to
                        worry about authentication. The downside to that is that
                        you're limited to 60 requests / hour per IP. I'm
                        flattered that you're that interested but maybe calm
                        down just a little bit?
                    </h2>
                </div>
            )}
        </Layout>
    );
}
