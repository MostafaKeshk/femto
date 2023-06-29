import axios from "axios";
import { url } from "./utils/url";
import authHeader from "./utils/authHeader";

class GoalApi {
  static async get(pageNumber: number, pageSize: number) {
    const result = await axios.get(
      `${url}/goals?pageSize=${pageSize}&pageNumber=${pageNumber}`,
      {
        headers: authHeader(),
      }
    );

    return result.data;
  }

  static async getOne(goalId: any) {
    const result = await axios.get(`${url}/goals/${goalId}`, {
      headers: authHeader(),
    });

    return result.data;
  }

  static async update(goalId: any, body: any) {
    const result = await axios.patch(`${url}/goals/${goalId}`, body, {
      headers: authHeader(),
    });

    return result.data;
  }

  static async create(body: any) {
    const result = await axios.post(`${url}/goals`, body, {
      headers: authHeader(),
    });

    return result.data;
  }

  static async delete(goalId: any) {
    const result = await axios.delete(`${url}/goals/${goalId}`, {
      headers: authHeader(),
    });

    return result.data;
  }
}

export default GoalApi;
