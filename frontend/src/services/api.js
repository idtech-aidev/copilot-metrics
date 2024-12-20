import axios from 'axios';
import { API_BASE_URL } from '../config/config';

axios.defaults.baseURL = API_BASE_URL;

const api = {
    async getExports() {
        const response = await axios.get(`exports`);
        return response.data;
    },

    async getEnterpriseMetrics() {
        const response = await axios.get(`enterprise/metrics`);
        return response.data;
    },

    async getEnterpriseTeamMetrics() {
        const response = await axios.get(`enterprise/team/metrics`);
        return response.data;
    },

    async getOrgMetrics() {
        const response = await axios.get(`org/metrics`);
        return response.data;
    },

    async getOrgTeamMetrics() {
        const response = await axios.get(`org/team/metrics`);
        return response.data;
    }
};

export default api;
