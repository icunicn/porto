import { Link } from 'react-router-dom';
import './BrandHeader.css';

export default function BrandHeader() {
  return <Link className="brand" to="/" aria-label="Back to home"><span>Muhamad Kharis Ihsan</span><small>Programmer &amp; Data Enthusiast</small></Link>;
}
