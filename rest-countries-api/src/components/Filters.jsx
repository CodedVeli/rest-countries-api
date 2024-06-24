import { Select, Space } from 'antd';

function Filters({setRegion}) {
  return (
    <Space size={20}>
      <Select
        style={{ width: 200 }}
        placeholder="Filter by Region"
        onChange={(value) => setRegion(value)}
      >
        <Select.Option value="Africa">Africa</Select.Option>
        <Select.Option value="Americas">Americas</Select.Option>
        <Select.Option value="Asia">Asia</Select.Option>
        <Select.Option value="Europe">Europe</Select.Option>
        <Select.Option value="Oceania">Oceania</Select.Option>
        <Select.Option value="North America">North America</Select.Option>
        <Select.Option value="South America">South America</Select.Option>
        
      </Select>
    </Space>    
  );
}

export default Filters;
