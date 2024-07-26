import Main from "@/components/Main";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();
  const isUserAuthenticated = await isAuthenticated();
  console.log(user, isUserAuthenticated);
  return (
    <Main
      user={user}
      isAuthenticated={isUserAuthenticated}
    />
  );
}
