import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'C',
      level: 1,
    },
    {
      title: 'JavaScript',
      level: 1,
    },
  ],
};
/*
const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [
    {
      title: 'Kernel Programming',
      level: 3,
    },
    {
      title: 'GNU Debugger',
      level: 3,
    },
    {
      title: 'Memory Management',
      level: 2,
    },
    {
      title: 'System Call Interface',
      level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'KVM',
      level: 3,
    },
    {
      title: 'Xen',
      level: 2,
    },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 3,
    },
    {
      title: 'Chef',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};
*/
const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'MIDI',
    },
    {
      title: 'Play anything in a band',
    },
    {
      title: 'Plan for everything',
    },
    {
      title: 'Organize data',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    // kernelDevelopment,
    // virtualization,
    // automation,
    // networkSecurity,
    misc,
  ],
  tooltip: '1: Have Experience with\n2: Am Familiar with',
};

export default skill;
