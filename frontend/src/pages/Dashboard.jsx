import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import { useRecoilValue } from "recoil";
import { tokenAtom, userAtom } from "../store/atoms";
import { getBalance } from "../services/operations/transactionAPI";
import { Users } from "../Components/Users";

const Dashboard = () => {
  const [balance, setBalance] = useState("");
  const token = useRecoilValue(tokenAtom);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const fetchBalance = async () => {
      const userBalance = await getBalance(token);
      setBalance(userBalance);
    };
    fetchBalance();
  }, [token]);

  return (
    <div>
      <Appbar user={user.firstName} />
      <Balance balance={balance} />
      <Users />
    </div>
  );
};

export default Dashboard;