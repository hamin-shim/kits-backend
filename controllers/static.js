import StaticJobs from "../models/Static/StaticJobs.js";
import StaticSkills from "../models/Static/StaticSkills.js";
import StaticJobTypes from "../models/Static/StaticJobTypes.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await StaticJobs.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getJobTypes = async (req, res) => {
  try {
    const jobTypes = await StaticJobTypes.find();
    res.status(200).json(jobTypes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await StaticSkills.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createJob = async (req, res) => {
  const job = new StaticJobs(req.body);
  try {
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createJobType = async (req, res) => {
  const jobType = new StaticJobTypes(req.body);
  try {
    await jobType.save();
    res.status(201).json(jobType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createSkill = async (req, res) => {
  const skill = new StaticSkills(req.body);
  try {
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
