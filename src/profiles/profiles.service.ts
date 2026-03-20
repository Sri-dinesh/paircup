import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'A software developer with a passion for open source.',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description:
        'A graphic designer who loves creating beautiful user interfaces.',
    },
    {
      id: randomUUID(),
      name: 'Alice Johnson',
      description: 'A data scientist who enjoys analyzing complex datasets.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const createProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(createProfile);
    return createProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find(
      (existingProfile) => existingProfile.id === id,
    );

    if (!matchingProfile) {
      return {};
    }

    matchingProfile.name = updateProfileDto.name;
    matchingProfile.description = updateProfileDto.description;

    return matchingProfile;
  }

  remove(id: string): void {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    if (matchingProfileIndex > -1) {
      this.profiles.splice(matchingProfileIndex, 1);
    }
  }
}
