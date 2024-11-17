import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface User {
  subscribed: boolean; // or `string` if `subscribed` is a string
  telegramId: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_ROUTE_PATH}/all-users`);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Block a user
  const blockUser = async (telegramId: string) => {
    console.log("Block user", telegramId);
    try {
      await axios.post(`${import.meta.env.VITE_ROUTE_PATH}/block-user`, {
        telegramId,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.telegramId === telegramId ? { ...user, subscribed: false } : user
        )
      );
    } catch (error) {
      console.error("Error blocking user:", error);
    }
  };

  // Delete a user
  const deleteUser = async (telegramId: string) => {
    console.log("Delete user", telegramId);
    try {
      await axios.delete(`${import.meta.env.VITE_ROUTE_PATH}/delete-user`, {
        data: { telegramId }, 
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user.telegramId !== telegramId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full p-4 bg-slate-100">
      <Table>
        <TableCaption>Total number of Users: {users.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S. No.</TableHead>
            <TableHead className="text-center">Telegram ID</TableHead>
            <TableHead className="text-center">Subscription</TableHead>
            <TableHead className="text-center">Block</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => {
            let subscribed = "Subscribed";
            {
              user.subscribed ? subscribed : (subscribed = "Unsubscribed");
            }
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="text-center">{user.telegramId}</TableCell>
                <TableCell className="text-center">{subscribed}</TableCell>
                <TableCell className="text-center">
                  <Button
                    onClick={() => blockUser(user.telegramId)}
                    disabled={!user.subscribed}
                    value={user.telegramId}
                  >
                    Block
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button onClick={()=>deleteUser(user.telegramId)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
